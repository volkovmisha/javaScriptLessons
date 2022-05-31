class Api {
    #endpoint = 'http://nestapi-env.eba-9kgvuxij.eu-central-1.elasticbeanstalk.com/contacts';

    getContacts() {
        return  fetch(this.#endpoint).then(r => r.json())
    }

    createContact(name,lastName,phone) {
       const formData = {
               name: name,
               lastName: lastName,
               phone: phone,
           };
       return fetch(this.#endpoint,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(r => r.json())
    }

    deleteContact(id) {
        const url = this.#endpoint+ '/' + id
        return fetch(url,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(r => r.json())
    }

    editContact(formData) {
        const url = this.#endpoint+ '/' +   formData.id
        return fetch(url,{method: 'PUT',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}