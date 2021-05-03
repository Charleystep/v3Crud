<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aluno extends Model
{
    protected $fillable = [
        "title",
        "type",
        "name",
        "dataNasc",
        "serie",
        "cep",
        "rua",
        "numero",
        "complemento",
        "bairro",
        "cidade",
        "estado",
        "nomeMae",
        "cpfMae",
        "dataPag",
    ];
    use HasFactory;
}
