 
 
  
  
 
  
 
  document.getElementById('noakali-donate-btn').addEventListener("click",function(){
    const total = getTextFieldById("total-balance");
    const inputNoakali=getInputFieldValueById("n-input-donation");
     const giveNoakali = getTextFieldById("give-noakali");

     if(isNaN!==inputNoakali && inputNoakali <= total){
      // const donationNoakali=inputNoakali + giveNoakali;
     
      const donationNoakali=inputNoakali + giveNoakali;
    
      document.getElementById('give-noakali').innerText=donationNoakali;
      const newbalance = total - inputNoakali;
      document.getElementById('total-balance').innerText = newbalance;
      document.getElementById('n-input-donation').value='';

      const remove =document.getElementById('modal');
       remove.classList.remove('hidden');  



        
 
    
    const historyItem = document.createElement('div');
    historyItem.className = "bg-blue p-4 rounded-lg border-2 border-pink-500";
    historyItem.innerHTML = ` 
    <h1 class="text-2xl text-gray-500">$${inputNoakali.toFixed(2)}taka donate for famine-2024 at  fani,Bangladesh </h1>
   <p class="text-xs text-gray-500">${new Date().toUTCString()} </p> `
   const historyContainer = document.getElementById('naokali-h');
    historyContainer.insertBefore(historyItem,historyContainer.firstChild);
     }else{
       alert('please type valid input')
       const remove =document.getElementById('modal');
       remove.classList.add('hidden');
       document.getElementById('n-input-donation').value='';

     } 
  })

  const inputfani=getInputFieldValueById("f-input-donation" );
  document.getElementById('fani-donate-btn',).addEventListener("click",function(){
     const total = getTextFieldById("total-balance");
    const givefani = getTextFieldById("give-fani");
   
     const inputfani=getInputFieldValueById("f-input-donation" ); 
     if(isNaN!==inputfani && inputfani <= total){
       const donation=inputfani +givefani;
       document.getElementById('give-fani').innerText = donation;
       const newbalance =total -inputfani ;

       document.getElementById('total-balance').innerText = newbalance;

       document.getElementById('f-input-donation').value='';

       const remove =document.getElementById('modal');
       remove.classList.remove('hidden');  
     }else{
      alert('invalid input')
      const remove =document.getElementById('modal');
      remove.classList.add('hidden');
      document.getElementById('f-input-donation').value='';
    }    
         const historyItem = document.createElement('div');
         historyItem.className = "bg-blue p-4 rounded-lg border-2 border-pink-500";
         historyItem.innerHTML = ` 
         <h1 class="text-2xl text-gray-500">$${inputfani.toFixed(2)}taka donate for flood-2024 at  fani,Bangladesh </h1>
        <p class="text-xs text-gray-500">${new Date().toUTCString()} </p> `
         const historyContainer = document.getElementById('fani-h');
         historyContainer.insertBefore(historyItem,historyContainer.firstChild); 
  })

 
  document.getElementById('qouta-donate-btn').addEventListener('click',function (){
    const giveQuota = getTextFieldById("give-quota");
    const total = getTextFieldById("total-balance");
    const inputquota=getInputFieldValueById("q-input-donation");
    
    if( isNaN !== inputquota && inputquota <= total) {
      const newbalance = total - inputquota;
      const givemoney= giveQuota +inputquota;
      document.getElementById('give-quota').innerText =givemoney;
      
      document.getElementById('total-balance').innerText =newbalance;
      document.getElementById('q-input-donation').value='';

      const remove =document.getElementById('modal');
       remove.classList.remove('hidden');

       document.getElementById('')

    }else {
      
      alert('invalid input')
      const remove =document.getElementById('modal');
      remove.classList.add('hidden');
      document.getElementById('q-input-donation').value='';
    }


         
         const historyItem = document.createElement('div');
         historyItem.className = "bg-blue p-4 rounded-lg border-2 border-pink-500";
         historyItem.innerHTML = ` 
         <h1 class="text-2xl text-gray-500">$${inputquota.toFixed(2)}taka donate for quotq-2024 at  Dhaka university,Bangladesh </h1>
        <p class="text-xs text-gray-500">${new Date().toUTCString()} </p> `
        const historyContainer = document.getElementById('quota-h');
         historyContainer.insertBefore(historyItem,historyContainer.firstChild);
  })

  const history=document.getElementById('history-id');
  history.addEventListener('click',function (){

    const main =document.getElementById('main-d');
    main.classList.add('hidden');

    const move =document.getElementById('history');
    move.classList.remove('hidden');
    
    const mov =document.getElementById('donationid');
    mov.classList.remove('color1');

    
    const ove =document.getElementById('history-id');
    ove.classList.add('color1');
})


  const onation=document.getElementById('donationid');
  onation.addEventListener('click',function (){
    document.getElementById('main-d').classList.remove('hidden');

    document.getElementById('donationid').classList.add('color1');
    document.getElementById('history-id').classList.remove('color1');


    document.getElementById('history').classList.add('hidden');
    
  })


  


  document.getElementById('homes').onclick= function(){
    window.location.href='index.html';
  }

  // document.getElementById('blog').onclick= function (){
  //   window.location.href="blog.html";
  // }



  const donation = document.getElementById('donation-main-btn');
const historys = document.getElementById('history-main-btn');

historys.addEventListener('click', function(){

  const btnCr = document.getElementById('donation-main-btn');
  btnCr.classList.remove('color1');

  const btnlr = document.getElementById('history-main-btn');
  btnlr.classList.add('color1');
  
  const hidToadd = document.getElementById('history');
  hidToadd.classList.remove('hidden');
  
  const addTohide = document.getElementById('donation');
  addTohide.classList.add('hidden');
});
donation.addEventListener('click', function(){

  const btnCr = document.getElementById('donation-main-btn');
  btnCr.classList.add('color1');

  const btnlr = document.getElementById('history-main-btn');
  btnlr.classList.remove('color1');
  
  const hidToadd = document.getElementById('history');
  hidToadd.classList.add('hidden');

  const addTohide = document.getElementById('donation');
  addTohide.classList.remove('hidden');
});

