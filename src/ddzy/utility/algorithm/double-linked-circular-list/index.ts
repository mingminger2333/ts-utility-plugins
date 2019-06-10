import {
  ListNode,
} from './list-node/index';

export interface IDoubleLinkedCircularListProps<V> {
  nodes?: V[];
};
export interface IDoubleLinkedCircularListState<V> {
  head: ListNode<V> | null;
  tail: ListNode<V> | null;
};


/**
 * TODO: append -> 追加至末尾
 * TODO: prepend -> 追加至首部
 * TODO: insertBefore -> 追加至某个节点前
 * TODO: insertAfter -> 追加至某个节点后
 * TODO: traversalWithForward -> 正向遍历
 * TODO: traversalWithBackward -> 反向遍历
 * TODO: getHead -> 获取头节点
 * TODO: getTail -> 获取尾节点
 */

export class DoubleLinkedCircularList<V> {
  public static readonly defaultProps: IDoubleLinkedCircularListProps<any> = {
    nodes: [2, 5, 8, 3, 7, 19, 23, 14, 41],
  }

  public constructor(props: IDoubleLinkedCircularListProps<V>) {
    this.__init__(props);
  }


  private readonly state: IDoubleLinkedCircularListState<V> = {
    head: null,
    tail: null,
  };


  private __init__(
    props: IDoubleLinkedCircularListProps<V>,
  ): void {
    this._initProps(props);
    this._initLinkedList();
  }

  private _initProps(
    props: IDoubleLinkedCircularListProps<V>,
  ): void {
    for (const key in props) {
      DoubleLinkedCircularList.defaultProps[
        key as keyof typeof DoubleLinkedCircularList.defaultProps
      ] = props[
        key as keyof typeof DoubleLinkedCircularList.defaultProps
      ]
    }
  }

  private _initLinkedList(): void {
    const {
      nodes,
    } = DoubleLinkedCircularList.defaultProps;

    for (const v of (nodes as V[])) {
      this.handleAppend(v);
    }
  }

  private _aidedHandleGetHead(): ListNode<V> | null {
    return this.state.head;
  }

  private _aidedHandleGetTail(): ListNode<V> | null {
    return this.state.tail;
  }

  private _aidedHandleAppend(
    node: ListNode<V>,
  ): void {
    if (!this.state.head) {
      this.state.head = node;
      this.state.tail = node;
      node.next = this.state.tail;
      node.prev = this.state.head;
      this.state.tail.next = this.state.head;
    }
    else {
      let current: ListNode<V> | null = this.state.head;

      while (current !== this.state.tail) {
        current = current ? current.next : null;
      }

      // ? 找到最后一个节点
      if (current) {
        current.next = node;
        node.prev = current;
        this.state.tail = node;
        this.state.tail.next = this.state.head;
      }
    }
  }


  /**
   * 获取头节点, 入口
   */
  public handleGetHead(): ListNode<V> | null {
    return this._aidedHandleGetHead();
  }

  /**
   * 获取尾节点, 入口
   */
  public handleGetTail(): ListNode<V> | null {
    return this._aidedHandleGetTail();
  }

  /**
   * 尾部追加节点, 入口
   * @param value 节点值
   */
  public handleAppend(
    value: V,
  ): DoubleLinkedCircularList<V> {
    const node = new ListNode<V>({
      value,
      next: null,
      prev: null,
    });

    this._aidedHandleAppend(node);

    return this;
  }
}