function cria_marmitas(){
    document.getElementById("erro").innerText="";
    document.getElementById("result").innerText=""; 
    
    const name_product = document.getElementById('name-product').value;
    const description_product = document.getElementById('input-description').value;
    const price_product = parseFloat(document.getElementById('price-product').value).toFixed(2);    
    const image_product = document.getElementById('image-product').value;

    console.log(name_product,description_product,price_product,image_product);

    if(name_product != "" && description_product != "" && price_product != "" && image_product != ""){
    fetch("https://fitdelivery-api.herokuapp.com/foods",{method:"POST",headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, body:JSON.stringify({
        name: name_product,
        description: description_product,
        price: parseFloat(price_product).toFixed(2),
        image: image_product,
        sale: false
    })}).then(res => res.json()).then(res => {
        document.getElementById("result").innerText="Produto criado com sucesso."
    }).catch(erro => {
        document.getElementById("erro").innerText="Erro ao criar o produto."  
    })
    }else{
        document.getElementById("erro").innerText="Erro ao criar o produto." 
    }
}

function getUsers(){
    fetch("https://fitdelivery-api.herokuapp.com/users").then(res => res.json()).then(res => {
        res.map(user => {
            document.getElementById("list").innerHTML += `
            <div class="card">
            <b>${user.email}</b>
            <b id="date-user">${user.created_at.split("T")[0]}</b>
            </div>
            `
        })
    })
}