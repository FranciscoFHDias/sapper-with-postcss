<script context="module">
	export async function preload({ params, query }) {
	  const res = await this.fetch(`blog/${params.slug}.json`);
	  const data = await res.json();
  
	  if (res.status === 200) {
		return { post: data };
	  } else {
		this.error(res.status, data.message);
	  }
	}
  </script>
  
  <script>
	export let post;
  </script>
  
  <svelte:head>
	<title>{post.title}</title>
  </svelte:head>
  
  <!-- prose is a class from Tailwind typography plugin -->
  <div class='prose prose-lg'>
	<h1>{post.title}</h1>
  
	{@html post.html}
  </div>