function cria_marmitas(){
    const name_product = document.getElementById('name-product').value;
    const description_product = document.getElementById('input-description').value;
    const price_product = parseFloat(document.getElementById('price-product').value).toFixed(2);    
    const image_product = document.getElementById('image-product').value;

    console.log(name_product,description_product,price_product,image_product);

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
        console.log(res);
    }).catch(erro => {
        console.log(erro);  
    })
}