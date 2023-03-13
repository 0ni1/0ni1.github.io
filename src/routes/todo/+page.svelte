<script>
import { onMount } from 'svelte'; // For loading JSON data (load the TODO saved data)
  
  let newListItems = ""; 
  
  let TODOItems = []
	
	function addToList() {
		TODOItems = [...TODOItems, {text: newListItems, status: false}];
		newListItems = '';
	}
	
	function removeFromList(index) {
		TODOItems.splice(index, 1)
		TODOItems = TODOItems;
    }
</script>

<input bind:value={newListItems} type="text" placeholder="new todo item..">
<button on:click={addToList}>Add</button>

<br/>
{#each TODOItems as item, index}
	<input bind:checked={item.status} type="checkbox">
	<span class:checked={item.status}>{item.text}</span>
	<span on:keypress={() => removeFromList(index)}></span>
	<br/>
{/each} 


<style> 
	.checked {
        text-decoration: line-through;
    }
</style> 