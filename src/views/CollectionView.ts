import { Collection } from '../models/Collection';
import { User } from '../models/User';

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}
}
