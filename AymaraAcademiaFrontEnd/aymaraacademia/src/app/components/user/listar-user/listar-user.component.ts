import { UserService } from './../../../services/user.service';
import { User } from './../../../models/user';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
selector: 'app-listar-user',
templateUrl: './listar-user.component.html',
styleUrls: ['./listar-user.component.css'],
})
export class ListarUserComponent implements OnInit {
dataSource: MatTableDataSource<User> = new MatTableDataSource();
displayedColumns: string[] =
['idUser', 'username', 'password', 'accion01','accion02'];
@ViewChild(MatPaginator) paginator!: MatPaginator;
constructor(private userService: UserService) {}

ngOnInit(): void {
this.userService.list().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;
});
this.userService.getList().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;

}); 
}
eliminar(id: number) {
this.userService.delete(id).subscribe((data) => {
this.userService.list().subscribe((data) => {
this.userService.setList(data);
});
});
}
filter(en: any) {
this.dataSource.filter = en.target.value.trim();
}
}
