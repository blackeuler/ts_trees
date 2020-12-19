type GenericNode<T>  = {value: T, children: GenericNode<T>[]};

type GenericTree<T> = GenericNode<T>;
