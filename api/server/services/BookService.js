import database from '../src/models';

class BookService {
   // get all books method
   static async getAllBooks() {
      try {
         return await database.Book.findAll();
      } catch (error) {
         throw error
      }
   }

   // add books method
   static async addBook(newBook) {
      try {
         return await database.Book.create(newBook);
      } catch (error) {
         throw error
      }
   }

   // update books method
   static async updateBook(id, updateBook) {
      try {
         const bookToUpdate = await database.Book.findOne({
            where: {
               id: Number(id)
            }
         })
         if (bookToUpdate) {
            await database.Book.update(updateBook, {
               where: {
                  id: Number(id)
               }
            });
            return updateBook
         }
         return null;
      } catch (error) {
         throw error
      }
   }

   // get a book method
   static async getABook(id) {
      try {
         const theBook = await database.Book.findOne({
            where: {
               id: Number(id)
            }
         });
         return theBook;
      } catch (error) {
         throw error
      }
   }

   // delete a book method
   static async deleteBook(id) {
      try {
         const bookToDelete = await database.Book.findOne({
            where: {
               id: Number(id)
            }
         })
         if (bookToDelete) {
            const deletedBook = await database.Book.destroy({
               where: {
                  id: Number(id)
               }
            })
            return deletedBook;
         }
         return null;
      } catch (error) {
         throw error
      }
   }
}

export default BookService;