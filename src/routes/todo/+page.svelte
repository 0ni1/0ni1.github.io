
<script>
    let newtask = "";
	let tasks = [
		{ done: false, name: 'tja' },
		{ done: false, name: 'dehär är' },
		{ done: false, name: 'exempel tasks' }
	];
    
</script>

<h1>
    🧙to do listan🧙
    
    
</h1>

<input bind:value={newtask}>
<button  on:click={()=>{
    
    tasks.push({done: false, name: newtask})
    tasks=tasks
    newtask=""

}}>
    Add "{newtask}" to todo-list
    
</button>
<ul>
	{#each tasks as task , i}
		<li
        id={ task.done? "done": "notdone"} >
			{i }: {task.name}
            <button  on:click={()=>{
                task.done = !task.done;
            }}>
                Complete task
            </button>
            <button  on:click={()=>{
               tasks.splice(i, 1);
               tasks= tasks;
            }}>
                delete task
            
            </button>
		</li>
	{/each}
</ul>



<style>
    #done{
        color:rgb(187, 172, 202);
    }
    

</style>
