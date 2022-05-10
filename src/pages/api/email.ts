export const email = (order: any) => {
  const formatLocal = (code: number) => {
    if (code === 0) {
      return 'Não utilizar'
    } else if (code === 1) {
      return 'Frente'
    } else if (code === 3) {
      return 'Atrás'
    } else {
      return 'Não utilizar'
    }
  }

  const formatMaterial = (code: string) => {
    if (code === "black") {
      return 'Black'
    } else if (code === "white") {
      return 'White'
    } else if (code === "silver") {
      return 'Silver'
    } else if (code === "gold") {
      return 'Gold'
    } else if (code === "roseGold") {
      return 'Rose Gold'
    } else if (code === "blackGold") {
      return 'Black Gold'
    } else if (code === "rainbow") {
      return 'Rainbow'
    } else {
      return 'Não utilizar'
    }
  }

  const formatPrint = (code: string) => {
    if (code === "dark") {
      return 'Escuro'
    } else if (code === "clear") {
      return 'Claro'
    } else {
      return 'Escuro'
    }
  }

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
    <td>${
  order.information.cardName ? order.information.cardName : 'SEM NOME'
}</td>
  </tr>
  <tr>
    <td>Local do nome do cartão</td>
    <td>${formatLocal(order.information.cardNameLocal)}</td>
  </tr>
  <tr>
    <td>Local do número do cartão</td>
    <td>${formatLocal(order.information.cardNumberLocal)}</td>
  </tr>
  <tr>
    <td>Local da validade do cartão</td>
    <td>${formatLocal(order.information.cardValidityLocal)}</td>
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
    <td>${formatMaterial(order.metal.materialSelected)}</td>
  </tr>
  <tr>
    <td>Impressão selecionada</td>
    <td>${formatPrint(order.metal.printSelected)}</td>
  </tr>
  <tr>
    <td>Borda selecionada</td>
    <td>Borda 0${order.metal.borderSelected}</td>
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
    <td>${order.design.customText ? order.design.customText : "SEM TEXTO PERSONALIZADO"}</td>
  </tr>
  <tr>
    <td>Tamanho letra</td>
    <td>${order.design.sizeValue} PX</td>
  </tr>
  <tr>
    <td>Tipografia</td>
    <td>Mont Serrat</td>
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
  <tr>
    <td>Chip</td>
    <td>${order.userInformations.senderChecked === 0 ? 'Colocamos o chip' : 'Cliente coloca o chip'}</td>
  </tr>
</table>

</body>
</html>

`
}
