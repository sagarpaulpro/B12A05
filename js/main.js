for(i=0;i<document.getElementsByTagName('button').length;i++){
    if(document.getElementsByTagName('button')[i].innerText === 'Copy'){
        document.getElementsByTagName('button')[i].addEventListener('click',function(){
            document.getElementById('copyCounter').innerText = parseInt(document.getElementById('copyCounter').innerText) + 1;
            navigator.clipboard.writeText((this.parentElement.parentElement).querySelector('h2').innerText);
        });
    }
    else if(document.getElementsByTagName('button')[i].innerText === 'Call' && parseInt(document.getElementById('coinCounter').innerText) >= 0){
        document.getElementsByTagName('button')[i].addEventListener('click',function(){
            document.getElementById('coinCounter').innerText = parseInt(document.getElementById('coinCounter').innerText) - 20;
            if(parseInt(document.getElementById('coinCounter').innerText) < 0){
                document.getElementById('coinCounter').innerText = 0;
                alert('Insufficient balance to make a call. you need at least 20 coins to make a call.');
                return;
            }
            alert('Calling ' + (this.parentElement.parentElement).querySelector('p').innerText + ' ' + (this.parentElement.parentElement).querySelector('h2').innerText + '...');

            let card = document.createElement('div');
            card.className = 'flex justify-between shadow-sm p-4 rounded-lg my-2 border border-gray-100';
            card.innerHTML = `
                <div>
                    <h1></h1>
                    <span></span>
                </div>
                <p></p> `;

            card.querySelector('h1').innerText = (this.parentElement.parentElement).querySelector('h1').innerText;

            card.querySelector('span').innerText = (this.parentElement.parentElement).querySelector('h2').innerText;

            card.querySelector('p').innerText = new Date().toLocaleTimeString();

            document.getElementById('cardContainer').appendChild(card);
        });
    }
    else if(document.getElementsByTagName('button')[i].innerText === 'Clear'){
        document.getElementsByTagName('button')[i].addEventListener('click',function(){
            document.getElementById('cardContainer').innerHTML = '';
        });
    }
}