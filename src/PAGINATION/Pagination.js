import React, { useState, useEffect } from 'react'
import './Pagination.scss';


export default function Pagination({ setstate, state }) {
    const [page, setPage] = useState([]);
    var y = state;

    useEffect(() => {
        fetch('https://reqres.in/api/users')
            .then(response => response.json())
            .then(
                data => {
                    const arry = [];
                    for (let index = 1; index <= data.total_pages; index++) {
                        arry.push(index);
                    }
                    setPage(arry);
                })
            .catch(error => {
                console.error('Error:', error);
            });

    }, [])
    const changeContent = (evt) => {
        let val = evt.target.value;
        setstate(parseInt(val));


    }
    const prev = () => {
        if (state === 2) {
            setstate(parseInt(state) - 1);
        }

    }
    const next = () => {
        if (state === 1) {
            setstate(parseInt(state) + 1);
        }

    }
    return (
        <div className="pagination">

            <button onClick={prev}>&lt;&lt;</button>
            {page.map((id) =>
                <button key={id} value={id} onClick={changeContent} >{id}</button>

            )}
            <button onClick={next}>&gt;&gt;</button>
        </div>
    )
}



