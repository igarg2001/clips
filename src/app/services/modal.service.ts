import { Injectable } from '@angular/core';

interface IModal {
  visible: boolean;
  id: string;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: IModal[] = [];
  constructor() {}

  registerModal(id: string): void {
    this.modals.push({ id, visible: false });
    // console.log(this.modals);
  }

  deRegisterModal(id: string): void {
    this.modals = this.modals.filter((modal) => modal.id !== id);
  }

  isModalVisible(id: string): boolean {
    return !!this.modals.find((modal) => modal.id === id)?.visible;
  }

  toggleModal(id: string): void {
    const modal = this.modals.find((modal) => modal.id === id);
    if (modal) {
      modal.visible = !modal.visible;
    }
  }
}
