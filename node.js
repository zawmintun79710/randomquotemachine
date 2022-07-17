window.onload = Init;

function Init(){
  changeQuote()
}

function changeQuote(){
    const Quotes = [{quote:'The greatest glory in living lies not in never falling, but in rising every time we fall',author:'Nelson Mandela',backgroundimage:'NelsonMandela.jpg',colors:'#6D716E'},
                    {quote:'The way to get started is to quit talking and begin doing',author:'Walt Disney',backgroundimage:'WaltDisney.webp',colors:'#ABDF5F'},
                    {quote:'If life were predictable it would cease to be life, and be without flavor',author:'Eleanor Roosevelt',backgroundimage:'EleanorRoosevelt.jpg',colors: '#5FD6DF'},
                    {quote:`If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough`,author:'Oprah Winfrey',backgroundimage:'OprahWinfrey.jpg',colors: '#E86CA9'},
                    {quote:`Life is what happens when you're busy making other plans`,author:'John Lennon',backgroundimage:'JohnLennon.webp',colors: '#EE517A'},
                    {quote:`If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success`,author:'James Cameron',backgroundimage:'JamesCameron.jpg',colors: '#A569BD'},
                    {quote:`Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking`,author:'Steve Jobs',backgroundimage:'SteveJobs.avif',colors: '#73C6B6'}
                   ];

    
    //const imagedir ="./image/";

    const quoteIndex = Math.floor(Math.random()* Quotes.length)
    const twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22Strive%20not%20to%20be%20a%20success%2C%20but%20rather%20to%20be%20of%20value.%22%20Albert%20Einstein";

    document.getElementById("tweet-quote").href = twitterLink;
    document.getElementById("text").innerText = Quotes[quoteIndex].quote;
    document.getElementById("author").innerText = Quotes[quoteIndex].author;
    //document.getElementById("cardimage").setAttribute("style","background-image: url("+ imagedir + Quotes[quoteIndex].backgroundimage+")")
    document.body.style.backgroundColor = Quotes[quoteIndex].colors;
    document.getElementById('new-quote').style.backgroundColor = Quotes[quoteIndex].colors;
    document.getElementById('tweet-quote').style.backgroundColor = Quotes[quoteIndex].colors;
    document.getElementById("text").style.color = Quotes[quoteIndex].colors;
    document.getElementById("author").style.color = Quotes[quoteIndex].colors;
}

