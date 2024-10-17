<h1 align="center">Url shortener</h1>
<h1>Overview</h1>

<img src="https://assets.roadmap.sh/guest/url-shortening-service-c1nzi.png" alt="project architecture">

A URL shortening service that enables users to convert long URLs into shorter, more manageable links. This project features the ability to submit a long URL and receive a shortened version in return, with both versions stored in a MongoDB database for later use. It includes a catch-all route to seamlessly redirect users from the short URL to the corresponding long URL and an endpoint to check the statistics of how many times each route was accessed, ensuring an efficient and user-friendly experience.  
### Installation guide 

<ol>
  <li><strong>Clone the project repo</strong></li>
  <pre><code>git clone https://github.com/NAJIB-B/url-shortener.git</code></pre>

  <li><strong>Navigate into the project directory</strong></li>
  <pre><code>cd url-shortener</code></pre>

  <li><strong>Install the dependencies</strong></li>
  <pre><code>npm install</code></pre>

  <li><strong>Create your own MongoDB database</strong></li>
  <p>(I used <a href="https://www.mongodb.com/products/platform/atlas-database">MongoDB Atlas</a>)</p>

  <li><strong>Create your <code>.env</code> file</strong></li>
  <pre><code>touch .env</code></pre>

  <li><strong>Add the following environment variables</strong></li>
  <p>Populate the <code>.env</code> file with the following variables, replacing the placeholders with your own details:</p>

  <pre><code>DATABASE="mongodb+srv://&lt;username&gt;:&lt;password&gt;@cluster0.mongodb.net/&lt;database-name&gt;?retryWrites=true&amp;w=majority&amp;appName=Cluster0"
PORT=&lt;port&gt;
  </code></pre>

  <p><strong>Note:</strong></p>
  <ul>
    <li>Replace <code>&lt;username&gt;</code>, <code>&lt;database-name&gt;</code>, <code>&lt;password&gt;</code> and <code>&lt;port&gt;</code></li>
  </ul>

  <li><strong>Run the project</strong></li>
  <pre><code>npm start</code></pre>
</ol>



**project idea from** [https://roadmap.sh/projects/url-shortening-service](https://roadmap.sh/projects/url-shortening-service)
