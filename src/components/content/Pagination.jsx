import React from 'react';

const Pagination = (props) => {
    return (
        <div class="pages">
            <button aria-label="Transactions previous page">
                <img src="img/pa/left_arr.svg" alt="left arrow" class="lozad" width="8" height="14" />
            </button>
            <button>1</button>
            <button>2</button>
            <button>...</button>
            <button class="active">78</button>
            <button>79</button>
            <button aria-label="Transactions next page">
                <img src="img/pa/right_arr.svg" alt="right arrow" class="lozad" width="8" height="14" />
            </button>
        </div>
    )
}

export default Pagination