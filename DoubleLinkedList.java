/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Kareem,Abdul, Mohamad
 */
public class DoubleLinkedList <A> {

    //change, moe was here
    private static class Node<A>{
        private A Input;
        private Node<A> nextNode;
        private Node<A> prevNode;

        public Node(A Input, Node<A> nextNode, Node<A> prevNode) {
            this.Input = Input;
            this.nextNode = nextNode;
            this.prevNode = prevNode;
        }
        public A getInput(){
            return Input;
        }
        
        public void setNext(Node<A> nextNode){
            this.nextNode = nextNode;
        }
        public Node<A> getNext(){
            return nextNode;
        }
        
        public void setprev(Node<A> prevNode){
            this.prevNode = prevNode;
        }
        public Node<A> getprev(){
            return prevNode;
        }
    }
    
    int size = 0;
    private Node<A> head;
    private Node<A> tail;
    
    
    public boolean isEmpty(){
        return size == 0;
    }
    
    public void addFirst(A element){
        Node<A> newNode = new Node<>(element, head , null); // 
        
        if(isEmpty()) tail = newNode;
        if(size != 0) head.setprev(newNode); 
        head = newNode;
        size++;
    }
    
    public void addLast(A element){
        Node<A> newNode = new Node<>(element, null, tail);
        
        if(isEmpty()) head = newNode;
        else {
            tail.setNext(newNode);
        }

        tail = newNode;
        size++;
    }
    
    public void printAll()
    {
        Node<A> currentNode = head;
        while(currentNode != null)
        {
            System.out.println(currentNode.getInput());
            currentNode = currentNode.getNext();
        }
    }
    public void printReverse(){
        Node<A> currentNode = tail;
        while(currentNode != null)
        {
            System.out.println(currentNode.getInput());
            currentNode = currentNode.getprev();
        }
    }
}
