const MELI_API_ITEMS = '/api/items';
const meliSearchItemsURL = (searchKey) => `${MELI_API_ITEMS}?q=${encodeURIComponent(searchKey)}`;
const meliGetItemURL = (id) => `${MELI_API_ITEMS}/${id}`;

/**
 * Call api meli for searching items by query
 * @param {*} query 
 */
const getItems = async (query) => {
    return fetch(meliSearchItemsURL(query)).then(getJSON);
};
/**
 * Call api meli for retrieving item by id
 * @param {*} id 
 */
const getItem = async (id) => {
    return fetch(meliGetItemURL(id)).then(getJSON);
};

const getJSON = (response) => response.json();

export { getItems, getItem };