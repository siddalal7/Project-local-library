function findAccountById(accounts, id) {
  //returns account object with matching ID
  return accounts.find((account) => account.id === id)
}

function sortAccountsByLastName(accounts) {
  //returns sorted array of accounts by last name
  return accounts.sort((accountA, accountB) =>
    accountA.name.last > accountB.name.last ? 1 : -1)
}

function getTotalNumberOfBorrows(account, books) {

  const accID = account.id
  let borrowed = []
  for (book in books){
    const bookObj = books[book]
    bookObj.borrows.forEach((book1) =>
      book1.id === accID ? borrowed.push(1) : borrowed)
  }
  return result = borrowed.reduce((acc, each) => acc + each)
}

function getBooksPossessedByAccount(account, books, authors) {
 let final = [];
 let borrowMatch = [];
 books.forEach((item) => {
  const borrowed = item.borrows;
  const book = {
   id: item.id,
   title: item.title,
   genre: item.genre,
   authorId: item.authorId,
   author: {},
   borrows: {}
  };
  const { id, title, genre, authorId, author, borrows } = book;

  borrowed.forEach((borrow) => {
   if (borrow.id === account.id && borrow.returned === false) {
    final.push(book);
    borrowMatch.push(borrow);
    book.borrows = borrowMatch;
    book.author = authors.filter((auth) => auth.id === book.authorId)[0];
   }
  });
 });
 return final;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
