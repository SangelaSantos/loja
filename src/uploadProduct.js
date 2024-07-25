import { storage, db, ref, uploadBytes, getDownloadURL, collection, addDoc, query, orderBy, limit, getDocs } from './firebase';

async function getNextCategory() {
  const productsRef = collection(db, 'products');
  const q = query(productsRef, orderBy('category', 'desc'), limit(1));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return 1; // Se não houver produtos, começar com a categoria 1
  }

  const lastProduct = querySnapshot.docs[0].data();
  return lastProduct.category + 1;
}

async function uploadProduct(product) {
  const { imageFile, name, price } = product;

  // Obter a próxima categoria
  const category = await getNextCategory();

  // Referência ao Storage
  const storageRef = ref(storage, `images/${imageFile.name}`);

  // Upload da imagem
  await uploadBytes(storageRef, imageFile);
  const imageUrl = await getDownloadURL(storageRef);

  // Adicionar produto ao Firestore
  await addDoc(collection(db, 'products'), {
    name,
    price,
    category,
    imageUrl,
  });
}

export default uploadProduct;
