<script> 
	// JavaScript program to sort a doubly linked list using 
	// bubble sort 
	// structure of a node 
	class Node { 
		constructor() { 
		this.data = 0; 
		this.next = null; 
		this.prev = null; 
		} 
	} 

	// Function to insert a node at the beginning of a linked list 
	function insertAtTheBegin(start_ref, data) { 
		var ptr1 = new Node(); 
		ptr1.data = data; 
		ptr1.next = start_ref; 
		if (start_ref != null) start_ref.prev = ptr1; 
		start_ref = ptr1; 
		return start_ref; 
	} 

	// Function to print nodes in a given linked list 
	function printList(start) { 
		var temp = start; 
		document.write("<br>"); 
		while (temp != null) { 
		document.write(temp.data + " "); 
		temp = temp.next; 
		} 
	} 

	// Bubble sort the given linked list 
	function bubbleSort(start) { 
		var swapped; 
		var ptr1; 
		var lptr = null; 

		// Checking for empty list 
		if (start == null) return null; 

		do { 
		swapped = 0; 
		ptr1 = start; 

		while (ptr1.next != lptr) { 
			if (ptr1.data > ptr1.next.data) { 
			var t = ptr1.data; 
			ptr1.data = ptr1.next.data; 
			ptr1.next.data = t; 
			swapped = 1; 
			} 
			ptr1 = ptr1.next; 
		} 
		lptr = ptr1; 
		} while (swapped != 0); 
		return start; 
	} 

	// Driver code 
	var arr = [12, 56, 2, 11, 1, 90]; 
	var i; 

	// start with empty linked list 
	var start = null; 

	// Create linked list from the array arr[]. 
	//Created linked list will be 1->11->2->56->12 
	for (i = 0; i < 6; i++) start = insertAtTheBegin(start, arr[i]); 

	// print list before sorting 
	document.write("Linked list before sorting "); 
	printList(start); 

	// sort the linked list 
	start = bubbleSort(start); 

	// print list after sorting 
	document.write("<br> Linked list after sorting "); 
	printList(start); 
		
	// This code is contributed by rdtank. 
	</script>
