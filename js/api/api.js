class Api {
    #endpoint = 'http://nestapi-env.eba-9kgvuxij.eu-central-1.elasticbeanstalk.com/todos';

    getTodos() {
        return  fetch(this.#endpoint).then(r => r.json())
    }

    createTodo(title,body) {
       const formData = {
               title: title,
               body: body,
               isComplete: false
           };
       return fetch(this.#endpoint,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(r => r.json())
    }

    deleteTodo(id) {
        const url = this.#endpoint+ '/' + id
        return fetch(url,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(r => r.json())
    }

    completeTodo(formData) {
        formData.isComplete = true;
        console.log(formData)
        const url = this.#endpoint+ '/' + formData.id
        return fetch(url,{
            method: 'PUT',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    editTodo(formData) {
        console.log(formData)
        const url = this.#endpoint+ '/' +   formData.id
        return fetch(url,{method: 'PUT',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}