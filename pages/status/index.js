import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);

  const responseBody = await response.json();
  return responseBody;
}

export default function StatusPage() {
  return (
    <>
      <h1>Status</h1>
      <UpdatedAt />
      <DataBaseInfo />
    </>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let updatedAtText = "Carregando...";

  if (!isLoading && data) {
    updatedAtText = new Date(data.updated_at).toLocaleString("pt-BR");
  }

  return <div>Última atualização: {updatedAtText}</div>;
}

function DataBaseInfo() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let dbInfoText = "Carregando...";

  if (!isLoading && data) {
    dbInfoText = JSON.stringify(data.dependencies.database, null, 2);
  }
  return <div>Informações Base de Dados: {dbInfoText}</div>;
}
