//Get the data from client-view
// let arr = [];

async function getData() {
  const clientData = await fetch("/client");
  const data = await clientData.json();

  console.log(data);
}
// getData();
