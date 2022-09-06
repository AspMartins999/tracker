import InputText from "../../../components/molecules/InputText"

export const Login = () => {
  return (
    <div className="w-screen h-screen bg-gray-50 flex justify-center">
      <div className="w-full h-full max-w-screen-lg grid grid-cols-2">
        <aside className="flex justify-center items-center">
          <img src="/dog.svg" alt="doguinho" />
        </aside>
        <main className="flex flex-col justify-center items-center gap-16">
          <h1 className="font-bold text-3xl">Ajude seu doguinho</h1>
          <form className="flex flex-col w-full gap-2">
            <InputText label="email" type="email"/>         
            <InputText label="senha" type="password"/>
            <button>Log In</button>
          </form>
          <a href="/register">Criar Conta</a>
        </main>
      </div>
    </div>
  );
};
