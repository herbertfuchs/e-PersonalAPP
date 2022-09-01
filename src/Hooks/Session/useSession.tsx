import { Appwrite } from "appwrite";
import { SessionResponse } from "./@types";

const useSession = (navigation) => {
  const sdk = new Appwrite();

  sdk
    .setEndpoint("https://king-kong.faladev.org/v1") // API Endpoint
    .setProject("61f998e0b23aeb09ff5c"); // Project ID

  const detectSession = () => {
    let promise = sdk.account.getSessions();
    promise.then(
      function (response) {
        console.log(response);
        console.log(`Sessão detectada, redirecionando...`);
        navigation.navigate("Exercicios");
      },
      function (error) {
        console.log(`Nenhuma sessão encontrada, efetue o Login.`);
        console.log(error);
      }
    );
  };

  const continueAsGuest = () => {
    let promise = sdk.account.createAnonymousSession();
    promise.then(
      function (response) {
        console.log(response);
        console.log(`Conectado como anônimo.`);
        navigation.navigate("Exercicios");
      },
      function (error) {
        console.log(error);
      }
    );
  };
  return { detectSession, continueAsGuest } as SessionResponse;
};

export default useSession;
