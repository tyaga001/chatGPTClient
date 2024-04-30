bring cloud;
bring openai;
bring http;
bring ex;
bring react;

// TODO: Set the secret value in the "secrets.json" file (create it if needed) in the ".wing" folder inside your user's folder.
// You need to add an OAIAPIKey like this:
//{
//  "OAIAPIKey": "<your key here>"
//}
// to forget to also add OAIAPIKey in your .env file and pass your OpenAI API key to it.
// Alternatively, you can set the secret value in the OpenAI constructor directly in line 18, like this:
// this.openai = new openai.OpenAI(apiKey: <your key here>);
let apiKeySecret = new cloud.Secret(name: "OAIAPIKey") as "OpenAI Secret";
let api = new cloud.Api({cors: true});
let counter = new cloud.Counter();



let db = new ex.Table(
  name: "assistant",
  primaryKey: "id",
  columns: {
    "question" => ex.ColumnType.STRING,
    "answer" => ex.ColumnType.STRING,
  }
);

class Assistant {
  personality: str;
  openai: openai.OpenAI;

  new(personality: str) {
    this.openai = new openai.OpenAI(apiKeySecret: apiKeySecret);
    this.personality = personality;
  }

  pub inflight ask(question: str): str {
    let prompt = "you are an assistant with the following personality: {this.personality}. {question}";
    let response = this.openai.createCompletion(prompt, model: "gpt-3.5-turbo");

    return response.trim();
  }
}

class RespondToQuestions {
  id: cloud.Counter;
  gpt: Assistant;
  store: cloud.Bucket;

  new (store: cloud.Bucket) {
    this.gpt = new Assistant("Respondent");
    this.id = new cloud.Counter() as "NextID";
    this.store = store;
  }

  pub inflight sendPrompt(question: str): str {
    let reply = this.gpt.ask("{question}");
    let n = this.id.inc();
    this.store.put("message-{n}.original.txt", reply);
    return reply;
  }
}


let store = new cloud.Bucket() as "Joke Store";
let answerSource = new cloud.Topic() as "New answer";

let myAssistant = new RespondToQuestions(store) as "Helpful Assistant";


new cloud.Function(inflight () => {
  let query = "programming languages";
  log("asking a question ${query}");
  let response = myAssistant.sendPrompt(query);
  log("publishing joke: ${response}");
  answerSource.publish(response);
}) as "START HERE";

api.post("/assistant", inflight (request) => {
  let prompt = request.body;
  log("loggin this to the console {Json.stringify(prompt)}");
  let response = myAssistant.sendPrompt("{Json.stringify(prompt)}");
  let id = "{counter.inc()}";

  db.insert(id, {question: prompt, answer: response}); 

  return cloud.ApiResponse {
    body: response,
    status: 200
  };
});

api.get("/assistant", inflight () => {
  let questionsAndAnswers = db.list();
  return cloud.ApiResponse{
    body: Json.stringify(questionsAndAnswers),
    status: 200
  };

});


let website = new react.App(
  projectPath: "../frontend",
  //localPort: 4000 // default is 3001
 );

website.addEnvironment("API_URL", api.url);
website.addEnvironment("TEXT", "Hello welcome here");
