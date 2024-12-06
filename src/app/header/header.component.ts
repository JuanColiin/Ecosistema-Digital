import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuOpen = false;

  // Función para abrir o cerrar el menú
  toggleMenu(event: MouseEvent) {
    // Prevenir el comportamiento por defecto si el clic es en el botón
    event.stopPropagation();
    this.menuOpen = !this.menuOpen;
  }

  // Función para cerrar el menú
  closeMenu() {
    this.menuOpen = false;
  }

  // Detecta clics fuera del menú para cerrarlo
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const clickedInside = (event.target as HTMLElement).closest('.mobile-menu') !== null ||
                          (event.target as HTMLElement).closest('.menu-btn') !== null;
    if (!clickedInside && this.menuOpen) {
      this.closeMenu();
    }
  }
}
