const API_URL = "http://backend:8081";

const PostsApi = {
    getProduits: () => {
        return fetch(`${API_URL}/produits`).then((response) =>
            response.json()
        );
    },

    getProduitById: (id) => {
        console.log("Id from getProduitById");
        return fetch(`${API_URL}/produit/${id}`).then((response) =>
            response.json()
        );
    },

    addProduit: (produit) => {
        return fetch(`${API_URL}/produit`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(produit),
        }).then((response) =>
            response.json().then((data) => ({
                status: response.status,
                data: data,
            }))
        );
    },

    deleteProduit: (id) => {
        return fetch(`${API_URL}/produit/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then(() => {
                console.log(`Produit ${id} supprimé`);
            })
            .catch((error) => {
                console.error(`Erreur lors de la suppression :`, error);
            });
    },

    updateProduit: (id, produit) => {
        return fetch(`${API_URL}/produit/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(produit),
        }).then((response) =>
            response.json().then((data) => ({
                status: response.status,
                data: data,
            }))
        );
    },

    getProduitByIdToUpdate: (id) => {
        console.log("Id from getProduitById");
        return fetch(`${API_URL}/produit/${id}`).then((response) =>
            response.json().then((data) => ({
                status: response.status,
                data: data,
            }))
        );
    },
};

export default PostsApi;
