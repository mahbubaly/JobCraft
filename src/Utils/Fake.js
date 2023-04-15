const addDetails = id => {
    let DetailsCard ={}
    const previousData = localStorage.getItem('Information-cart');
    if(previousData){
        DetailsCard =JSON.parse(previousData);

    }
    //quantity

    const quantity = DetailsCard[id];
    if(quantity){
        const newQuantity = quantity +1;
        DetailsCard[id]=newQuantity;

    }
    else {
        DetailsCard[id]=1;
    }
    localStorage.setItem('Information-cart', JSON.stringify(DetailsCard));

   
}

const getItemData = () =>{
    let DetailsCard ={}
    const previousData = localStorage.getItem('Information-cart');
    if(previousData){
        DetailsCard =JSON.parse(previousData);

    }
    return DetailsCard

}


export {addDetails , getItemData}