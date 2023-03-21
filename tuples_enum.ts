// tuples only exsist in typescript

// it is an array of fixed length were order of types matter


let array :[number ,string ]=[1,"abc"];
type webresponse=[number,string];

const webarray :webresponse=[200,"ok"];

// enum only exsist in typescript


enum OrderStatus {

    DELIVERED,
    RETURNED,
    IN_TRANSIT,
    SHIPPED,
    PENDING

}


function checkOrderStatus(orderStatus :OrderStatus)
{

    if(orderStatus===OrderStatus.DELIVERED)
    {
        console.log("order is delivered  on "+new Date());
        console.log(OrderStatus.DELIVERED.valueOf());
    }


    if(orderStatus===OrderStatus.IN_TRANSIT)
    {
        console.log("order is transit as of  "+new Date());
    }

    if(orderStatus===OrderStatus.RETURNED)
    {
        console.log("order is returned as of  "+new Date());
    }

    if(orderStatus===OrderStatus.SHIPPED)
    {
        console.log("order is shipped as of  "+new Date());
    }


}



checkOrderStatus(OrderStatus.IN_TRANSIT);


// use const enum instead of just enum it will replace enum option with it's value so as not pollute
// javascript