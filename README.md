# Guajitech Challenge

## Instalar servidor

    npm install

## Ejecutar la App

    npm run dev

## NOTA
### Para consumir los endpoints que necesiten autenticación por parte del usuario:
#### 1- Autenticarse.
#### 2- Crear un encabezado de solicitud con el nombre ``pets-shop-access``
#### y pegar como valor asociado el token generado por la autenticación.
#### 3- Consumir el endpoint.

#Gestión de usuarios

## Registrar usuario

### Endpoint

`POST /users/register`

```json
{
	"name":"Ofelia Pelaez Pelaez",
	"email":"macaens8o@uci.sd",
	"password":"1234",
	"confirmPassword":"1234",
	"avatar":"Base 64"
}

```

## Autenticar usuario

### Endpoint

`POST /users/auth`

```json
{
  "identifier":"macanso@uci.sd",
  "password":"1234"
}
```
### o:

```json
{
  "identifier":"macanso",
  "password":"1234"
}
```
## Obtener listado de usuarios

### Endpoint

`POST /users/search`

### Para buscar un usuario por su nombre. Pasar en el cuerpo de la solicitud:
### Cuerpo de la solicitud

```json
{
    "search":"Manolo"
}

```

## Obtener detalles del un usuario

### Endpoint

`GET /users/:id`

## Actualizar infomacion un usuario

### Endpoint

`PATCH /users/:id`

## Eliminar usuario

### Endpoint

`DELETE /users/:id`

# Gestión de raza de animales

## Agregar un nueva raza

### Endpoint

`POST /breeds`
```json
{
  "name":"Labrador"
}

```
## Obtener listado de razas

### Endpoint

`POST /breeds/search`

### Para buscar una raza por su nombre. Pasar en el cuerpo de la solicitud:

```json
{
    "search":"Pitbull"
}

```
## Obtener detalles de una raza

### Endpoint

`GET /breeds/:id`
## Actualizar datos de un raza

### Endpoint

`PATCH /breeds/:id`
## Eliminar un raza

### Endpoint

`DELETE /breeds/:id`

# Gestión de animales

## Agregar un nuevo animal

### Endpoint

`POST /animals`

```json
{
  "shop":"60ff469501dd370ed8aa7be1",
  "breed":"60ff469501dd370ed8aa7be1",
  "price":20,
  "quantity":0
}

```
## Obtener listado de animales

### Endpoint

`POST /animals/search`

### Para buscar una animal por su nombre. Pasar en el cuerpo de la solicitud:

```json
{
    "search":"Linda"
}

```
## Obtener detalles de un animal

### Endpoint

`GET /animals/:id`
## Actualizar datos de un animal

### Endpoint

`PATCH /animals/:id`
## Eliminar un animal

### Endpoint

`DELETE /animals/:id`

# Gestión de mascotas

## Obtener listado de mascotas

### Endpoint

`POST /pets/search`

### Para buscar una mascota por su nombre. Pasar en el cuerpo de la solicitud:

```json
{
    "search":"Linda"
}

```
## Obtener detalles de una mascota

### Endpoint

`GET /pets/:id`
## Actualizar datos de una mascota

### Endpoint

`PATCH /pets/:id`
## Eliminar una mascota

### Endpoint

`DELETE /pets/:id`

# Gestión de tiendas

## Agregar una nueva tienda

### Endpoint

`POST /shops`
```json
{
  "name":"Tammy's Pet Store"
}
```
## Obtener listado de tiendas

### Endpoint

`POST /shops/search`

### Para buscar una tienda por su nombre. Pasar en el cuerpo de la solicitud:

```json
{
    "search":"Pets store"
}

```
## Obtener detalles de una tienda

### Endpoint

`GET /shops/:id`
## Actualizar datos de una tienda

### Endpoint

`PATCH /pets/:id`
## Eliminar una tienda

### Endpoint

`DELETE /shops/:id`
## Comprar un animal.

### Endpoint

`POST /shops/buy-animal`

```json
{
	"animal":"612ef9f91195083f04117673",
	"name":"Bianca"
}
```
