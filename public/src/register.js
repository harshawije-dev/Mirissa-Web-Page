// const { response } = require("express");

$("#register").click(() => {
  const obj = {
    fname: $("#fname").val(),
    lname: $("#lname").val(),
    email: $("#email").val(),
    contact: $("#contact-num").val(),
    address: {
      one: $("#address-1").val(),
      two: $("#address-2").val(),
      three: $("#address-3").val(),
    },
    zip: $("#zip-code").val(),
    gender: $("input[name='gender']:checked").val(),
  };
  return dataReq(obj);
});

async function dataReq(val) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(val),
  };
  const fetchData = await fetch("/client", options);
  //Send client the response
  const getRes = await fetchData.json();

  if (getRes.status === "success") {
    window.open("../dashboard.html", "_self");
  } else {
    console.log(Error);
  }
}
