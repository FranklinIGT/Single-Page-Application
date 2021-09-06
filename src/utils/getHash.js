const getHash= () =>
 location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';//eliminamos los slash

export default getHash;    