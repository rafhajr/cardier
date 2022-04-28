export const email = (order: any) => {
  return `
<!DOCTYPE html>
<html>
<head>
<style>

div {
  height: 60px;
  background-color: #dddddd;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}



</style>
</head>
<body>

<h2>Pedido - ${order.userInformations.userName}</h2>

<table>
  <tr>
    <th>Informações</th>
    <th></th>
  </tr>
  <tr>
    <td>Nome no cartão</td>
    <td>${order.userInformations.userName}</td>
  </tr>
  <tr>
    <td>Local do nome do cartão</td>
    <td>${order.userInformations.userName}</td>
  </tr>
  <tr>
    <td>Local do número do cartão</td>
    <td>${order.information.cardNumberLocal}</td>
  </tr>
  <tr>
    <td>Local da validade do cartão</td>
    <td>${order.information.cardValidityLocal}</td>
  </tr>
</table>

<h2></h2>

<table>
  <tr>
    <th>Metal</th>
    <th></th>
  </tr>
  <tr>
    <td>Material selecionado</td>
    <td>${order.metal.materialSelected}</td>
  </tr>
  <tr>
    <td>Impressão selecionada</td>
    <td>${order.metal.printSelected}</td>
  </tr>
  <tr>
    <td>Borda selecionada</td>
    <td>${order.metal.borderSelected}</td>
  </tr>
</table>

<h2></h2>

<table>
  <tr>
    <th>Design</th>
    <th></th>
  </tr>
  <tr>
    <td>Texto personalizado</td>
    <td>${order.design.customText}</td>
  </tr>
  <tr>
    <td>Tamanho letra</td>
    <td>${order.design.sizeValue}</td>
  </tr>
  <tr>
    <td>Tipografia</td>
    <td>${order.design.typoValue}</td>
  </tr>
</table>

<h2></h2>

<table >
  <tr>
    <th>Usuário</th>
    <th></th>
  </tr>
  <tr>
    <td>Nome inteiro</td>
    <td>${order.userInformations.userName}</td>
  </tr>
  <tr>
    <td>E-Mail</td>
    <td>${order.userInformations.userEmail}</td>
  </tr>
  <tr>
    <td>Celular</td>
    <td>${order.userInformations.userWhats}</td>
  </tr>
</table>

</body>
</html>

`
}
