import { RoleService } from './../../../services/role.service';
import { Role } from './../../../models/role';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
selector: 'app-listar-role',
templateUrl: './listar-role.component.html',
styleUrls: ['./listar-role.component.css'],
})
export class ListarRoleComponent implements OnInit {
dataSource: MatTableDataSource<Role> = new MatTableDataSource();
displayedColumns: string[] =
['id', 'rol', 'user', 'accion01','accion02'];
@ViewChild(MatPaginator) paginator!: MatPaginator;
constructor(private roleService: RoleService) {}

ngOnInit(): void {
this.roleService.list().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;
});
this.roleService.getList().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;

});
}
eliminar(id: number) {
this.roleService.delete(id).subscribe((data) => {
this.roleService.list().subscribe((data) => {
this.roleService.setList(data);
});
});
}
filter(en: any) {
this.dataSource.filter = en.target.value.trim();
}
}
