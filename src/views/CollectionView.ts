import { Collection } from '../models/Collection';
import { User } from '../models/User';

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  abstract renderItem(model: T, itemParent: Element): void;

  render(): void {
    //clear parent to rerender
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
  }
}
