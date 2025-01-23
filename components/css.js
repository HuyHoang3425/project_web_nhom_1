export const css = `
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
}
header ul {
    display: flex;
    gap: 30px;
}
header a {
    font-size: 16px;
    font-weight: 500;
    color: #D9D9D9;
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
`