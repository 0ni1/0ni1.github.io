<script>

    import { COLOR } from "$env/static/private";
    import { bubble } from "svelte/internal";

</script>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/daisyui@1.14.2/dist/full.css" rel="stylesheet">
  <style>
    /* Custom styles */
    .hero {
      background-color: white;
      background-size: cover;   
      background-position: center;
      height: 500px;
    }

    .hero-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    .hero-title {
      font-size: 4rem;
      font-weight: bold;
      color: bg-neutral;
    }

    .hero-subtitle {
      font-size: 2rem;
      color: bg-focus;
      margin-top: 20px;
    }

  </style>
  <title>Unique Homepage with Daisy UI</title>
</head>
<body>
  <div class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Welcome to 0NI1's Website</h1>
      <p class="hero-subtitle">0NI1'S journey learning HTML, CSS & JS</p>
    </div>
  </div>
</body>
</html>
