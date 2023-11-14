import { UsersService } from './../../../services/users.service';
import { Users } from './../../../models/users';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-listar-users',
  templateUrl: './listar-users.component.html',
  styleUrls: ['./listar-users.component.css'],
})
export class ListarUsersComponent implements OnInit {
  dataSource: MatTableDataSource<Users> = new MatTableDataSource();
  displayedColumns: string[] = [
    'id',
    'username',
    // 'password',
    'enabled',
    'accion01',
    'accion02',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.usersService.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  eliminar(id: number) {
    this.usersService.delete(id).subscribe((data) => {
      this.usersService.list().subscribe((data) => {
        this.usersService.setList(data);
      });
    });
  }
  filter(en: any) {
    this.dataSource.filter = en.target.value.trim();
  }
}
