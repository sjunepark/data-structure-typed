import {DirectedEdge, DirectedGraph, DirectedVertex, VertexId} from '../../../../src';

describe('DirectedGraph Test1', () => {
    let graph: DirectedGraph<DirectedVertex, DirectedEdge>;

    beforeEach(() => {
        graph = new DirectedGraph();
    });


    it('should add vertices', () => {
        const vertex1 = new DirectedVertex('A');
        const vertex2 = new DirectedVertex('B');

        graph.addVertex(vertex1);
        graph.addVertex(vertex2);

        expect(graph.hasVertex(vertex1)).toBe(true);
        expect(graph.hasVertex(vertex2)).toBe(true);
    });

    it('should add edges', () => {
        const vertex1 = new DirectedVertex('A');
        const vertex2 = new DirectedVertex('B');
        const edge = new DirectedEdge('A', 'B');

        graph.addVertex(vertex1);
        graph.addVertex(vertex2);
        graph.addEdge(edge);

        expect(graph.hasEdge('A', 'B')).toBe(true);
        expect(graph.hasEdge('B', 'A')).toBe(false);
    });

    it('should remove edges', () => {
        const vertex1 = new DirectedVertex('A');
        const vertex2 = new DirectedVertex('B');
        const edge = new DirectedEdge('A', 'B');

        graph.addVertex(vertex1);
        graph.addVertex(vertex2);
        graph.addEdge(edge);

        expect(graph.removeEdge(edge)).toBe(edge);
        expect(graph.hasEdge('A', 'B')).toBe(false);
    });

    it('should perform topological sort', () => {
        const vertexA = new DirectedVertex('A');
        const vertexB = new DirectedVertex('B');
        const vertexC = new DirectedVertex('C');
        const edgeAB = new DirectedEdge('A', 'B');
        const edgeBC = new DirectedEdge('B', 'C');

        graph.addVertex(vertexA);
        graph.addVertex(vertexB);
        graph.addVertex(vertexC);
        graph.addEdge(edgeAB);
        graph.addEdge(edgeBC);

        const topologicalOrder = graph.topologicalSort();
        if (topologicalOrder) expect(topologicalOrder.map(v => v.id)).toEqual(['A', 'B', 'C']);
    });
});


class MyVertex extends DirectedVertex {
    private _data: string;
    get data(): string {
        return this._data;
    }
    set data(value: string) {
        this._data = value;
    }

    constructor(id: VertexId, data: string) {
        super(id);
        this._data = data;
    }
}

class MyEdge extends DirectedEdge {
    private _data: string;
    get data(): string {
        return this._data;
    }
    set data(value: string) {
        this._data = value;
    }

    constructor(v1: VertexId, v2: VertexId, weight: number, data: string) {
        super(v1, v2, weight);
        this._data = data;
    }
}


describe('DirectedGraph Test2 operations', () => {
    const myGraph = new DirectedGraph<MyVertex, MyEdge>();

    test('Add vertices', () => {
        myGraph.addVertex(new MyVertex(1, 'data1'));
        myGraph.addVertex(new MyVertex(2, 'data2'));
        myGraph.addVertex(new MyVertex(3, 'data3'));
        myGraph.addVertex(new MyVertex(4, 'data4'));
        myGraph.addVertex(new MyVertex(5, 'data5'));
        myGraph.addVertex(new MyVertex(6, 'data6'));
        myGraph.addVertex(new MyVertex(7, 'data7'));
        myGraph.addVertex(new MyVertex(8, 'data8'));
        myGraph.addVertex(new MyVertex(9, 'data9'));

    });

    test('Add edges', () => {
        myGraph.addVertex(new MyVertex(1, 'data1'));
        myGraph.addVertex(new MyVertex(2, 'data2'));
        myGraph.addEdge(new MyEdge(1, 2, 10, 'edge-data1-2'));
        myGraph.addEdge(new MyEdge(2, 1, 20, 'edge-data2-1'));

        expect(myGraph.edgeSet().length).toBe(2);
        // TODO
        expect(myGraph.getEdge(1, 2)).toBeInstanceOf(MyEdge);
        expect(myGraph.getEdge(2, 1)).toBeInstanceOf(MyEdge);
    });

    test('Get edge', () => {

        const edge1 = myGraph.getEdge(1, 2);
        const edge2 = myGraph.getEdge(myGraph.getVertex(1), myGraph.getVertex(2));
        const edge3 = myGraph.getEdge(1, '100');

        expect(edge1).toBeInstanceOf(MyEdge);
        edge1 && expect(edge1.src).toBe(1);
        expect(edge1).toEqual(edge2);
        expect(edge3).toBeNull();
    });

    test('Edge set and vertex set', () => {
        const edges = myGraph.edgeSet();
        const vertices = myGraph.vertexSet();

    });

    test('Remove edge between vertices', () => {
        myGraph.addVertex(new MyVertex(1, 'data1'));
        myGraph.addVertex(new MyVertex(2, 'data2'));
        myGraph.addEdge(new MyEdge(1, 2, 10, 'edge-data1-2'));

        const removedEdge = myGraph.removeEdgeBetween(1, 2);
        const edgeAfterRemoval = myGraph.getEdge(1, 2);

        expect(removedEdge).toBeInstanceOf(MyEdge);
        if (removedEdge) {
            removedEdge && expect(removedEdge.data).toBe('edge-data1-2');
            removedEdge && expect(removedEdge.src).toBe(1)
        }
        expect(edgeAfterRemoval).toBeNull();
    });

    test('Topological sort', () => {

        const sorted = myGraph.topologicalSort();

        expect(sorted).toBeInstanceOf(Array);
        if (sorted && sorted.length > 0) {
            expect(sorted.length).toBe(9);
            expect(sorted[0].data).toBe('data9');
            expect(sorted[3].data).toBe('data6');
            expect(sorted[8].id).toBe(1);
        }

    });

    test('Minimum path between vertices', () => {
        myGraph.addVertex(new MyVertex(1, 'data1'));
        myGraph.addVertex(new MyVertex(2, 'data2'));
        myGraph.addEdge(new MyEdge(1, 2, 10, 'edge-data1-2'));

        const minPath = myGraph.getMinPathBetween(1, 2);
    });

    test('All paths between vertices', () => {
        // Add vertices and edges as needed for this test
        myGraph.addVertex(new MyVertex(1, 'data1'));
        myGraph.addVertex(new MyVertex(2, 'data2'));
        myGraph.addEdge(new MyEdge(1, 2, 10, 'edge-data1-2'));

        const allPaths = myGraph.getAllPathsBetween(1, 2);

        // Add expect statements here to verify the allPaths
    });
});


describe('DirectedGraph Test3', () => {
    const myGraph = new DirectedGraph<MyVertex, MyEdge>();

    it('should test graph operations', () => {
        const vertex1 = new MyVertex(1, 'data1');
        const vertex2 = new MyVertex(2, 'data2');
        const vertex3 = new MyVertex(3, 'data3');
        const vertex4 = new MyVertex(4, 'data4');
        const vertex5 = new MyVertex(5, 'data5');
        const vertex6 = new MyVertex(6, 'data6');
        const vertex7 = new MyVertex(7, 'data7');
        const vertex8 = new MyVertex(8, 'data8');
        const vertex9 = new MyVertex(9, 'data9');
        myGraph.addVertex(vertex1);
        myGraph.addVertex(vertex2);
        myGraph.addVertex(vertex3);
        myGraph.addVertex(vertex4);
        myGraph.addVertex(vertex5);
        myGraph.addVertex(vertex6);
        myGraph.addVertex(vertex7);
        myGraph.addVertex(vertex8);
        myGraph.addVertex(vertex9);

        myGraph.addEdge(new MyEdge(1, 2, 10, 'edge-data1-2'));
        myGraph.addEdge(new MyEdge(2, 1, 20, 'edge-data2-1'));

        expect(myGraph.getEdge(1, 2)).toBeTruthy();
        expect(myGraph.getEdge(2, 1)).toBeTruthy();
        expect(myGraph.getEdge(1, '100')).toBeFalsy();

        myGraph.removeEdgeBetween(1, 2);
        expect(myGraph.getEdge(1, 2)).toBeFalsy();

        myGraph.addEdge(new MyEdge(3, 1, 3, 'edge-data-3-1'));

        myGraph.addEdge(new MyEdge(1, 9, 19, 'edge-data1-9'));
        myGraph.addEdge(new MyEdge(9, 7, 97, 'edge-data9-7'));

        myGraph.addEdge(new MyEdge(7, 9, 79, 'edge-data7-9'));

        myGraph.addEdge(new MyEdge(1, 4, 14, 'edge-data1-4'));

        myGraph.addEdge(new MyEdge(4, 7, 47, 'edge-data4-7'));

        myGraph.addEdge(new MyEdge(1, 2, 12, 'edge-data1-2'));

        myGraph.addEdge(new MyEdge(2, 3, 23, 'edge-data2-3'));

        myGraph.addEdge(new MyEdge(3, 5, 35, 'edge-data3-5'));

        myGraph.addEdge(new MyEdge(5, 7, 57, 'edge-data5-7'));

        myGraph.addEdge(new MyEdge(7, 3, 73, 'edge-data7-3'));
        const topologicalSorted = myGraph.topologicalSort();
        expect(topologicalSorted).toBeNull();

        const minPath1to7 = myGraph.getMinPathBetween(1, 7);

        expect(minPath1to7).toBeInstanceOf(Array);
        if (minPath1to7 && minPath1to7.length > 0) {
            expect(minPath1to7).toHaveLength(3);
            expect(minPath1to7[0]).toBeInstanceOf(MyVertex);
            expect(minPath1to7[0].id).toBe(1);
            expect(minPath1to7[1].id).toBe(9);
            expect(minPath1to7[2].id).toBe(7);
        }

        const fordResult1 = myGraph.bellmanFord(1);
        expect(fordResult1).toBeTruthy();
        expect(fordResult1.hasNegativeCycle).toBeUndefined();
        const {distMap, preMap, paths, min, minPath} = fordResult1;
        expect(distMap).toBeInstanceOf(Map);
        expect(distMap.size).toBe(9);
        expect(distMap.get(vertex1)).toBe(0);
        expect(distMap.get(vertex2)).toBe(12);
        expect(distMap.get(vertex3)).toBe(35);
        expect(distMap.get(vertex4)).toBe(14);
        expect(distMap.get(vertex5)).toBe(70);
        expect(distMap.get(vertex6)).toBe(Infinity);
        expect(distMap.get(vertex7)).toBe(61);
        expect(distMap.get(vertex8)).toBe(Infinity);
        expect(distMap.get(vertex9)).toBe(19);

        expect(preMap).toBeInstanceOf(Map);
        expect(preMap.size).toBe(0);

        expect(paths).toBeInstanceOf(Array);
        expect(paths.length).toBe(0);
        expect(min).toBe(Infinity);
        expect(minPath).toBeInstanceOf(Array);


        const floydResult = myGraph.floyd();
        expect(floydResult).toBeTruthy();
        if (floydResult) {
            const {costs, predecessor} = floydResult;
            expect(costs).toBeInstanceOf(Array);
            expect(costs.length).toBe(9);
            expect(costs[0]).toEqual([32, 12, 35, 14, 70, Infinity, 61, Infinity, 19]);
            expect(costs[1]).toEqual([20, 32, 23, 34, 58, Infinity, 81, Infinity, 39]);
            expect(costs[2]).toEqual([3, 15, 38, 17, 35, Infinity, 64, Infinity, 22]);
            expect(costs[3]).toEqual([123, 135, 120, 137, 155, Infinity, 47, Infinity, 126]);
            expect(costs[4]).toEqual([133, 145, 130, 147, 165, Infinity, 57, Infinity, 136]);
            expect(costs[5]).toEqual([Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity]);
            expect(costs[6]).toEqual([76, 88, 73, 90, 108, Infinity, 137, Infinity, 79]);
            expect(costs[7]).toEqual([Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity]);
            expect(costs[8]).toEqual([173, 185, 170, 187, 205, Infinity, 97, Infinity, 176]);

            expect(predecessor).toBeInstanceOf(Array);
            expect(predecessor.length).toBe(9);
            expect(predecessor[0]).toEqual([vertex2, null, vertex2, null, vertex3, null, vertex4, null, null]);
            expect(predecessor[1]).toEqual([null, vertex1, null, vertex1, vertex3, null, vertex4, null, vertex1]);
            expect(predecessor[5]).toEqual([null, null, null, null, null, null, null, null, null]);
            expect(predecessor[7]).toEqual([null, null, null, null, null, null, null, null, null]);
            expect(predecessor[8]).toEqual([vertex7, vertex7, vertex7, vertex7, vertex7, null, null, null, vertex7]);
        }

        const dijkstraRes12tt = myGraph.dijkstra(1, 2, true, true);

        expect(dijkstraRes12tt).toBeTruthy();
        if (dijkstraRes12tt) {
            const {distMap, minDist, minPath, paths, preMap, seen} = dijkstraRes12tt;
            expect(distMap).toBeInstanceOf(Map);
            expect(distMap.size).toBe(9);
            expect(distMap.get(vertex1)).toBe(0);
            expect(distMap.get(vertex2)).toBe(12);
            expect(distMap.get(vertex3)).toBe(Infinity);
            expect(distMap.get(vertex4)).toBe(14);
            expect(distMap.get(vertex5)).toBe(Infinity);
            expect(distMap.get(vertex6)).toBe(Infinity);
            expect(distMap.get(vertex7)).toBe(Infinity);
            expect(distMap.get(vertex8)).toBe(Infinity);
            expect(distMap.get(vertex9)).toBe(19);

            expect(minDist).toBe(12);
            expect(minPath).toBeInstanceOf(Array);
            expect(minPath.length).toBe(2);
            expect(minPath[0]).toBe(vertex1);
            expect(minPath[1]).toBe(vertex2);

            expect(paths).toBeInstanceOf(Array);
            expect(paths.length).toBe(9);
            expect(paths[0]).toBeInstanceOf(Array);
            expect(paths[0][0]).toBe(vertex1);

            expect(paths[1]).toBeInstanceOf(Array);
            expect(paths[1][0]).toBe(vertex1);
            expect(paths[1][1]).toBe(vertex2);

            expect(paths[2]).toBeInstanceOf(Array);
            expect(paths[2][0]).toBe(vertex3);
            expect(paths[3]).toBeInstanceOf(Array);
            expect(paths[3][0]).toBe(vertex1);
            expect(paths[3][1]).toBe(vertex4);
            expect(paths[4]).toBeInstanceOf(Array);
            expect(paths[4][0]).toBe(vertex5);

            expect(paths[5]).toBeInstanceOf(Array);
            expect(paths[5][0]).toBe(vertex6);
            expect(paths[6]).toBeInstanceOf(Array);
            expect(paths[6][0]).toBe(vertex7);
            expect(paths[7]).toBeInstanceOf(Array);
            expect(paths[7][0]).toBe(vertex8);
            expect(paths[8]).toBeInstanceOf(Array);
            expect(paths[8][0]).toBe(vertex1);
            expect(paths[8][1]).toBe(vertex9);

        }

        const dijkstraRes1ntt = myGraph.dijkstra(1, null, true, true);

        expect(dijkstraRes1ntt).toBeTruthy();
        if (dijkstraRes1ntt) {
            const {distMap, minDist, minPath, paths, preMap, seen} = dijkstraRes1ntt;
            expect(distMap).toBeInstanceOf(Map);
            expect(distMap.size).toBe(9);
            expect(distMap.get(vertex1)).toBe(0);
            expect(distMap.get(vertex2)).toBe(12);
            expect(distMap.get(vertex3)).toBe(35);
            expect(distMap.get(vertex4)).toBe(14);
            expect(distMap.get(vertex5)).toBe(70);
            expect(distMap.get(vertex6)).toBe(Infinity);
            expect(distMap.get(vertex7)).toBe(61);
            expect(distMap.get(vertex8)).toBe(Infinity);
            expect(distMap.get(vertex9)).toBe(19);

            expect(minDist).toBe(12);
            expect(minPath).toBeInstanceOf(Array);
            expect(minPath.length).toBe(2);
            expect(minPath[0]).toBe(vertex1);
            expect(minPath[1]).toBe(vertex2);

            expect(paths).toBeInstanceOf(Array);
            expect(paths.length).toBe(9);
            expect(paths[0]).toBeInstanceOf(Array);
            expect(paths[0][0]).toBe(vertex1);

            expect(paths[1]).toBeInstanceOf(Array);
            expect(paths[1][0]).toBe(vertex1);
            expect(paths[1][1]).toBe(vertex2);

            expect(paths[2]).toBeInstanceOf(Array);
            expect(paths[2][0]).toBe(vertex1);
            expect(paths[2][1]).toBe(vertex2);
            expect(paths[2][2]).toBe(vertex3);

            expect(paths[3]).toBeInstanceOf(Array);
            expect(paths[3][0]).toBe(vertex1);
            expect(paths[3][1]).toBe(vertex4);

            expect(paths[4]).toBeInstanceOf(Array);
            expect(paths[4][0]).toBe(vertex1);
            expect(paths[4][1]).toBe(vertex2);
            expect(paths[4][2]).toBe(vertex3);
            expect(paths[4][3]).toBe(vertex5);

            expect(paths[5]).toBeInstanceOf(Array);
            expect(paths[5][0]).toBe(vertex6);

            expect(paths[6]).toBeInstanceOf(Array);
            expect(paths[6][0]).toBe(vertex1);
            expect(paths[6][1]).toBe(vertex4);
            expect(paths[6][2]).toBe(vertex7);

            expect(paths[7]).toBeInstanceOf(Array);
            expect(paths[7][0]).toBe(vertex8);

            expect(paths[8]).toBeInstanceOf(Array);
            expect(paths[8][0]).toBe(vertex1);
            expect(paths[8][1]).toBe(vertex9);

        }

        const dijkstraWithoutHeapRes1ntt = myGraph.dijkstraWithoutHeap(1, null, true, true);
        expect(dijkstraWithoutHeapRes1ntt).toBeTruthy();
        if (dijkstraWithoutHeapRes1ntt) {
            const {distMap, minDist, minPath, paths, preMap, seen} = dijkstraWithoutHeapRes1ntt;
            expect(distMap).toBeInstanceOf(Map);
            expect(distMap.size).toBe(9);
            expect(distMap.get(vertex1)).toBe(0);
            expect(distMap.get(vertex2)).toBe(12);
            expect(distMap.get(vertex3)).toBe(35);
            expect(distMap.get(vertex4)).toBe(14);
            expect(distMap.get(vertex5)).toBe(70);
            expect(distMap.get(vertex6)).toBe(Infinity);
            expect(distMap.get(vertex7)).toBe(61);
            expect(distMap.get(vertex8)).toBe(Infinity);
            expect(distMap.get(vertex9)).toBe(19);

            expect(minDist).toBe(12);
            expect(minPath).toBeInstanceOf(Array);
            expect(minPath.length).toBe(2);
            expect(minPath[0]).toBe(vertex1);
            expect(minPath[1]).toBe(vertex2);

            expect(paths).toBeInstanceOf(Array);
            expect(paths.length).toBe(9);
            expect(paths[0]).toBeInstanceOf(Array);
            expect(paths[0][0]).toBe(vertex1);

            expect(paths[1]).toBeInstanceOf(Array);
            expect(paths[1][0]).toBe(vertex1);
            expect(paths[1][1]).toBe(vertex2);

            expect(paths[2]).toBeInstanceOf(Array);
            expect(paths[2][0]).toBe(vertex1);
            expect(paths[2][1]).toBe(vertex2);
            expect(paths[2][2]).toBe(vertex3);

            expect(paths[3]).toBeInstanceOf(Array);
            expect(paths[3][0]).toBe(vertex1);
            expect(paths[3][1]).toBe(vertex4);

            expect(paths[4]).toBeInstanceOf(Array);
            expect(paths[4][0]).toBe(vertex1);
            expect(paths[4][1]).toBe(vertex2);
            expect(paths[4][2]).toBe(vertex3);
            expect(paths[4][3]).toBe(vertex5);

            expect(paths[5]).toBeInstanceOf(Array);
            expect(paths[5][0]).toBe(vertex6);

            expect(paths[6]).toBeInstanceOf(Array);
            expect(paths[6][0]).toBe(vertex1);
            expect(paths[6][1]).toBe(vertex4);
            expect(paths[6][2]).toBe(vertex7);

            expect(paths[7]).toBeInstanceOf(Array);
            expect(paths[7][0]).toBe(vertex8);

            expect(paths[8]).toBeInstanceOf(Array);
            expect(paths[8][0]).toBe(vertex1);
            expect(paths[8][1]).toBe(vertex9);

        }
    });
});

