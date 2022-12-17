import React, { useEffect, useState } from "react";
import "./index.css";


function App(){
    const [data, setData] = useState(null);        
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        async function getData() {
            const response = await fetch('web-components/src/data/books.json');
            const json     = await response.json();
            setData(json);
            setLoaded(true);
        }
        getData();
    },[])
    console.log('loaded:', loaded, 'data:', data);

    const handleOnclick = () => {
        console.log('delete function fired')
        fetch('http://127.0.0.1:5500/WebComponents' + data.isbn, {
            method: 'DELETE'
        }).then(() => {
            console.log('deleted');
        });
    };

    return (<>
        <div className="container">
            <h1>React Components from Main</h1>
            {loaded && data.books.map((book,i) => 
                <div>
                    <button onClick={handleOnclick} key={book.isbn}>Delete {book.isbn}</button>
                <mit-book key={i}
                    title={book.title} 
                    subtitle={book.subtitle}
                    author={book.author}
                    publisher={book.publisher}
                    description={book.description}
                />
                </div>
            )}
        </div>        
    </>);   
}

export default App;

