firebase api

```javascript
checkEmail() {
      this.$fire.auth
        .fetchSignInMethodsForEmail(this.email)
        .then((result) => {
          console.log(result)
        })
        .catch((error) => {
          console.log(error)
        })
    },
```

