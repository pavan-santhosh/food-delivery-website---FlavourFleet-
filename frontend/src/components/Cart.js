import React,{useState} from 'react'
import './Cart.css'
import axios from 'axios'

function Cart() {


  const [amount,setAmount] = useState(0);
  const [toggle, setToggle] = useState(false);


  const handleChange = () => {

  }

  const handlePayNow = async () => {
    setAmount(5000);

    const {data:{key}} = await axios.post('http://localhost:4000/api/getkey')

    console.log(key)

    const {data:{order}} = await axios.post("http://localhost:4000/api/checkout",{
        amount
    })

    var options = {
        key: key, // Enter the Key ID generated from the Dashboard
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Acme Corp", //your business name
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "http://localhost:4000/api/paymentverification",
        prefill: { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
            name: "Gaurav Kumar", //your customer's name
            email: "gaurav.kumar@example.com",
            contact: "9000090000" //Provide the customer's phone number for better conversion rates 
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#3399cc"
        }
    };
    var rzp1 = new window.Razorpay(options);
        rzp1.open();
  }
  


  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <div className='CartPage'>
        <div className='Navbar'>
            <ul>
                <li>Home</li>
                <li>Restaurants</li>
                <li>Orders</li>
                <li>Contact Us</li>
                <li>About Us</li>
            </ul>
        </div>

        <div className='coupons-search' style={toggle?{width:'30%'}:{width:'0%'}}>
            <h1>Avail Coupons</h1>
            <form>
                <input
                    type='text'
                    placeholder='Enter coupon code'
                    name='coupon'
                    onChange={(e)=>handleChange(e.target.value)}
                />
                <button>Add Coupon</button>
            </form>
            <div className='coupon-codes'>
                
            </div>
        </div>    

        <div className='CartPage-title'>
            Here's Your Order
        </div>
        <div className='CartPage-items'>
            <table>
                <tr>
                    <div>
                    <td className='SNo'>1</td>
                    <td className='image'><img src='' alt='food'/></td>
                    <td className='data'>
                        <text className='foodName' style={{fontSize: '24px'}}>Name: Food Name</text><br></br>
                        <text className='restaurantName' style={{fontSize: '20px'}}>Restaurant Name: Restaurant Name</text><br></br>
                        <br></br>
                        <br></br>
                        <text className='Quantity'>Quantity: <strong>5</strong> Nos.</text>
                    </td>
                    </div>
                </tr>
                <tr>
                <div>
                    <td className='SNo'>1</td>
                    <td className='image'><img src='' alt='food'/></td>
                    <td className='data'>
                        <text className='foodName' style={{fontSize: '24px'}}>Name: Food Name</text><br></br>
                        <text className='restaurantName' style={{fontSize: '20px'}}>Restaurant Name: Restaurant Name</text><br></br>
                        <br></br>
                        <br></br>
                        <text className='Quantity' style={{fontSize: '16px'}}>Quantity: <strong>5</strong> Nos.</text>
                    </td>
                </div>
                </tr>
                <tr>
                <button className='pay-btn' onClick={()=>handlePayNow()}>Pay Now!</button><br></br>
                </tr>
            </table>
        </div>

        <div className='CartPage-bill'>
            <div className='CartPage-item-bill'>
                <p>Rate: ₹270</p>
                <p>Price: ₹1350 (5 Nos.)</p>
            </div>
            <div className='CartPage-item-bill'>
                <p>Rate: ₹270</p>
                <p>Price: ₹1350 (5 Nos.)</p>
            </div>
            
            <div style={{marginLeft: '5em'}}>
                <text >Delivery Charges: ₹0</text><br></br>
                <text style={{fontSize: '12px'}}>Tax: ₹320 (CGST + SGST = 18%)</text><br></br>
                <button className='coupons-btn' onClick={()=>handleToggle()}>+Add Coupons</button><br></br>
                <text style={{fontSize: '24px'}}>Discount: ₹0</text><br></br>
                <text style={{fontSize: '24px'}}>Grand Total: ₹0</text><br></br>
            </div>
        </div>
    </div>
  )
}

export default Cart