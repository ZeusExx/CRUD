<h1>Product Details</h1>
<p>ID: <%= product.id %></p>
<p>Name: <%= product.name %></p>
<p>Price: $<%= product.price.toFixed(2) %></p>
<p>Description: <%= product.description %></p>
<p>Category: <%= product.category %></p>
<a href="/products" class="btn btn-primary">Back to List</a>
