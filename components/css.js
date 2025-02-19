export const css = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400..800&family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&family=Young+Serif&display=swap');
/* header */
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: rgba(0, 0, 0, 0.177);
    position: fixed;
    z-index: 9999;
    width: calc(100% - 200px);
    border-radius: 60px;
    margin: 30px 100px;
    transition: all 0.5s ease-in-out;
}
.header-up{
    transform: translateY(-150px);
}
.header-down{
    transform: translateY(0);
    background-color: #1F1A06;
}
header ul {
    display: flex;
    gap: 30px;
}
header a {
    font-size: 16px;
    font-weight: 500;
    color: #D9D9D9;
    position: relative; 
}
header a:hover{
    color:#FFCA08;
}
header a:hover::after{
    display: block;
}
a.showafter{
    color:#FFCA08;
}
a.showafter::after{
    display: block;
}
header a::after{
    content: "";
    width: 10px;
    height: 10px;
    background-color: #FFCA08;
    border-radius: 50%;
    position: absolute;
    bottom: -34px;
    left: calc((100% - 5px)/2);
    display: none;
}
.btn {
    font-size: 18px;
    font-weight: 600;
    padding: 15px 40px;
    border-radius: 30px;
    border: 3px solid #FFCA08;
    background-color: #FFCA08;
    transition: all 0.3s ease-in-out;
}
.btn:hover{
    background-color: rgba(0, 0, 0, 0);
    color:#FFCA08
}
header .dropdown{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
header .dropdown:hover .list{
    display: block;
}
header .list{
    display: none;
    border-top: 4px solid #FFCA08;
    color:#ffffff;
    position: absolute;
    top:100%;
    left:0;
    width: 200px;
    background-color: #1F1A06;
    border-radius: 0 0 20px 20px;
    padding-bottom: 10px;
    transition: all 0.3s ease-in-out;

}
header .list .item{
    margin-bottom:10px;
    margin: 0 20px;
    width: calc(100%-40px);
    padding:10px;
    border-radius: 20px;
    transition: all 0.3s ease-in-out;
}
header .list .item:hover{
    color:#1c1601;
    background-color: #FFCA08;
}
header .list .item:nth-child(3):hover .list-2{
    display: block;
    position: relative;
}
header .list-2{
    display: none;
    border-top: 4px solid #FFCA08;
    color:#ffffff;
    position: absolute;
    top:55px;
    left:100%;
    width: 200px;
    background-color: #1F1A06;
    padding:20px 20px 0 20px;
    border-radius: 0 0 20px 20px;
    transition: all 1s ease-in-out;
}
header .list-2 li{
    margin-bottom:10px;
    width: 100%;
    padding:10px;
    border-radius: 20px;
}
header .list-2 li:hover{
    color:#1c1601;
    background-color: #FFCA08;
    transition: all 0.3s ease-in-out;
}
.dropdown-child{
    width: 100%;
}
.dropdown-child:hover .list-2{
    display: block;
}
header .btn-i{
    display: flex;
    gap:30px;
    align-items: center;
}
header .btn-i i{
    font-size: 30px;
    color:#F1F1F1;
    display: none;
}
.bar{
    font-size: 18px;
    height: 100vh;
    width: 50%;
    background-color: #FFCA08;
    font-weight: 500;
    position: absolute;
    top:0;
    right: -100%;
    position: absolute;
    overflow: hidden;  
    transition: all 0.6s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.bar.active{
    right:0;
}
.bar .li a{
    color:#1c1601a0;
    transition: all 0.5s ease-in-out;
}
.bar .li{
    padding: 15px 20px;
    transition: transform 0.5s ease-out;
    border:none
}
.bar .wrap{
    width: 100%;
}
hr{
    width: 100%;
    height: 2px;
    background-color: #5c5c5c;
    border: none;
}
.bar .li::after{
    content: '';
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #1c160146;
    position: absolute;
    top:0;
    left:-50px;
  }
.bar .li:hover{
    transform: translateX(20px);
}
.bar .li:hover a{
    color:#1C1601;
}
.bar .social{
    position: absolute;
    width:calc(100% - 60px);
    bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 400;
    color:#525252;
    border:1px solid #525252;
    padding:20px;
    border-radius: 30px;
    margin: 0 30px;
}
.bar .social ul{
    display: flex;
    gap:10px;
    position: absolute;
    bottom: 40px;
    font-size: 28px;
}
.bar .social ul li{
    padding:20px;
    width: 30px;
    height: 30px;
    border:1px solid #525252;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#FFCA08;
    background-color: #1C1601;
    position: relative;
    overflow: hidden;
    z-index: 2;
}
.bar .social ul li i{
    position: absolute;
    z-index: 2;
}
.bar .social ul li::after{
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    transform: translateX(-100%);
    z-index:1;
}
.bar .social ul li:nth-child(1)::after
{
    background-color: #185fbb;
    transition: transform 0.3s ease-out;
}
.bar .social ul li:nth-child(2)::after
{
    background-color:  #359cdc;
    transition: transform 0.3s ease-out;
}
.bar .social ul li:nth-child(3)::after
{
    background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
    transition: transform 0.3s ease-out;
}
.bar .social ul li:hover::after{
    transform: translateX(0);
}
.bar .social ul li:hover{
    color:#ffffff;
}
.close-bar{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 24px;
    border: none;
    background-color: rgba(255, 255, 255, 0.232);
    position: absolute;
    right: 50%;
    top: 0;
    display: none;
    padding:0;
}
.close-bar i{
    transition: transform 0.5s ease-out;
}
.close-bar:hover i{
 transform: rotate(-180deg);
}
@keyframes animate-bar-text {
    0%{
       transform: translateX(90px); 
    }
    100%{

        transform: translateX(0); 
     }
}
.chat{
    position:fixed;
    bottom:10px;
    left: 10px;
    font-size: 30px;
    z-index: 999;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #FFCA08;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.chat .cmt{
    display: block;
    animation:animate 0.3s ease-out forwards;
}
.chat .cls{
    display:none;
    animation:animate 0.3s ease-out forwards;
}
@keyframes animate {
    0%{
        transform: scale(0);
    }
    100%{
        transform: scale(1);
    }
}
.message{
    position: fixed;
    bottom:100px;
    left: 30px;
    z-index: 9999;
    width: 300px;
    height: 450px;
    background-color: #fff;
    display: none;
    border: 1px solid #ddd;
    border-radius: 15px;
    animation:show 0.3s ease-out forwards;
}
.message .card{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}
.message .card-1{
    background-color: #FFCA08;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px 15px 0 0 ;
}
.message .card-1 .title{
    font-size: 18px;
    margin: 0;
    font-weight: 400;
    color:#333333;
}
.message img{
    width: 15px;
    height:15px;
}
.message .card-2{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-top: 1px solid #ddd;
    padding: 10px;
}
.message .card-2 .content{
    display: flex;
    align-items: center;
    gap:10px;
    justify-content: center;
    margin-bottom: 20px;
}
.message .card-2 .content span{
    font-size: 14px;
}
.message .card-2 .input{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.message .card-2 .input input{
    border: none;
    outline: none;
    width: 70%;
}
.message .card-2 .input .icon{
    display: flex;
    gap:10px;
    font-size: 18px;
}
/* header */
.show-screen{
    display: block;
}
.section-1{
    background-image: url("../../assets/images/rent/background-1.jpg");
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
}
.section-1 .title{
    font-size: 40px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 20px;
}
.section-1 .icon{
    display: flex;
    gap:10px;
    color:#FFCA08;
    margin-bottom: 80px;
    align-items: center;
}
.section-1 .icon a{
    color:#FFCA08;
}
.section-1 .icon p{
    font-weight: 700;
}
/* footer */
.svg-5{
    height: 200px;
    position: absolute;
    top: -200px;

}
footer{
    position: relative;
    background-color: #1c1601;
    padding:0 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
footer .car-footer{
    width: 45%;
    position: absolute;
    top: -110px;
    left: 50px;
    z-index: 2;
}
footer .social{
    display: flex;
    gap:30px;
    position: absolute;
    right: 250px;
    top: 10px;
}
footer .social li{
    background-color: #ffffff;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    transition: all 0.3s ease-out;
}
footer .social li:hover{
    transform: scale(1.1);
    background-color: #FFCA08;
}
footer .social li:hover i{
    animation:animate 0.3s ease-out forwards;
}
@keyframes animate {
    0%{
        transform: scale(0);
    }
    100%{
        transform: scale(1);
    }
}
footer .card{
    background-color: #FFCA08;
    display: flex;
    gap:30px;
    align-items: center;
    justify-content: center;
    padding:50px;
    border-radius:20px ;
    margin:80px 0;
}
footer .card .title{
    font-size: 36px;
    margin:0;
}
footer .card .title span:nth-child(1){
    color:#333333;
    font-weight: 300;
}
footer .card .title span:nth-child(2){
    color:#333333;
    border-bottom:  1px solid #333333;
    padding-bottom: 10px;
}
footer p{
    color:#aaaaaa;
    font-size: 14px;
    margin-top: 20px;
    margin-bottom: 40px;
}
/* footer */
.gap{
    height: 100px;
}



@media (max-width: 1240px) {
    /* header */
    header nav{
        display:none;
    }
    header .btn-i i{
        display: block;
    }
    header{
        margin:0;
        width: 100%;
    }
    /* header */

    /* footer */
    .svg-5 {
        height: 100px;
        position: absolute;
        top: -100px;
    }
    footer .social {
        display: flex;
        gap: 30px;
        position: absolute;
        width: 100%;
        align-items: center;
        justify-content: center;
        left: 50%;
        transform: translate(-50%, -50%);
        top: 150px;
    }
    /* footer */
}
@media (max-width: 992px) {
    /* header */
    
    /* header */
}
@media (max-width: 768px) {
    /* header */
    header .btn {
        display: none;
    }
    header img{
        width: 120px;
    }
    /* header */

    /* footer */
    footer {
        padding: 30px;
    }
    footer .car-footer {
        top: -150px;
        width: 80%;
    }
    footer .card .title {
        font-size: 26px;
        margin: 0;
    }
    footer img {
        width: 200px;
    }
    footer p {
        font-size: 12px;
    }
    /* footer */
     .section-1{
        height: 200px;
        justify-content: flex-end;
    }
}
@media (max-width: 576px) {
    
    .bar .social{
        font-size: 12px;
        width: 100%;
        margin:0;
        padding:10px;
    }
    .bar .social ul li{
        padding:15px;
        width: 10px;
        height: 10px;
        font-size: 14px;
    }
    .show-screen{
    display: block;
    }

     /* footer */
    footer .car-footer {
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    footer .card {
        padding: 10px;
        margin: 20px 0;
        flex-direction: column;
    }
    footer .social {
        top: 100px;
        gap: 10px;
    }
    footer .social li {
        width: 40px;
        height: 40px;
        cursor:pointer;
    }
    footer .card .title {
        font-size: 18px;
        margin: 0;
    }
    footer img {
        width: 70px;
    }
    footer p {
        font-size: 9px;
    }
    /* footer */
    .gap{
    height:50px;
    }

    .section-1{
        height: 200px;
        justify-content: flex-end;
    }
    .section-1 .title{
        font-size: 32px;
    }
    .section-1 .icon{
        display: flex;
        gap:10px;
        color:#FFCA08;
        margin-bottom: 40px;
        font-size: 14px;
    }
      /* chat */
    .message {
        width: 60%;
    }

    .message .card-1 .title {
        font-size: 14px;
    }
    .message .card-2 .content span {
        font-size: 10px;
    }
    .message .card-2 i {
        font-size: 12px;
    }

    /* chat */
}
@media (min-width: 1240px) 
{
    .bar{
        display: none;
    }
    .close-bar
    {
        display: none;
    }
}git ad
`