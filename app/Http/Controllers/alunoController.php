<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Aluno;

class alunoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $alunos = Aluno::orderBy('updated_at', 'DESC')->get();
        return response() -> json(['status' => 200, 'alunos' => $alunos]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $newAluno = Aluno::create([
            'name' => $request->name,
            'dataNasc' => $request->dataNasc,
            'serie' => $request->serie,
            'cep' => $request->cep,
            'rua' => $request->rua,
            'numero' => $request->numero,
            'complemento' => $request->complemento,
            'bairro' => $request->bairro,
            'cidade' => $request->cidade,
            'estado' => $request->estado,
            'nomeMae' => $request->nomeMae,
            'cpfMae' => $request->cpfMae,
            'dataPag' => $request->dataPag
        ]);
        if($newAluno){
            return response()->json(["status" => 200]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $alunos = Aluno::find($id);
        return response()->json(['status' => 200, 'alunos' => $alunos  ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $alunos = Aluno::find($id);
        $alunos->title = $request->title;
        $alunos->type = $request->type;
        $alunos->name = $request->name;
        $alunos->dataNasc = $request->dataNasc;
        $alunos-> serie = $request->serie;
        $alunos->cep = $request->cep;
        $alunos->rua = $request->rua;
        $alunos->numero = $request->numero;
        $alunos->complemento = $request->complemento;
        $alunos->bairro = $request->bairro;
        $alunos->cidade = $request->cidade;
        $alunos->estado = $request->estado;
        $alunos->nomeMae = $request->nomeMae;
        $alunos->cpfMae = $request->cpfMae;
        $alunos->dataPag = $request->dataPag;
        if($alunos -> save()){
            return response()->json(["status" => 200]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $alunos = Aluno::find($id);
        if($alunos  -> delete()){
            return response()->json(["status" => 200]);
        }
    }
}