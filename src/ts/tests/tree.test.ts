test('Tree',()=>{

describe('A Regular Node', ()=>{
    it('Should create a node with value',()=>{
        expect(get_value(create_node(3))).toEqual(3);
    });
    it('Should have no children',()=>{
        expect(get_children(create_node(3))).toBeFalsy();
    });
});

describe('A Regular Tree',()=>{
    it('Should create a tree with root node',()=>{
        expect(root(create_tree(3))).toBe(create_node(3));
    });

});

});
